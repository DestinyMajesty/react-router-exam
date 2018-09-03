import React, { Component } from 'react'

import { Layout, Button, Input, Form, Tooltip, Cascader, message, Card } from 'antd';
import 'antd/lib/input/style/css'; 
import 'antd/lib/form/style/css'; 
import 'antd/lib/layout/style/css'; 
import 'antd/lib/cascader/style/css'; 



const { Content} = Layout;
const FormItem = Form.Item;

var beautify = require("json-beautify");

const method = [{
	value: 'GET',
	label: 'HTTP GET',
}, {
	value: 'PUT',
	label: 'HTTP PUT',
}, {
	value: 'POST',
	label: 'HTTP POST',
}, {
	value: 'DELETE',
	label: 'HTTP DELETE',
}];


class MyForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            passwordDirty: false,
            repHtml: null,
            debugRsponse: '',
            debugRequest: ''
        };
    }

    requestChange = (e) => {
        e.stopPropagation();
        this.setState({
            debugRequest: e.target.value
        });
    }

    formatJSON = () => {/* 格式化JSON源码(对象转换为JSON文本) */

        let txt = this.state.debugRequest;
        if(/^\s*$/.test(txt)){
            message.error('Request数据为空,无法格式化! ');
            return;
        }
        try{
            let data=eval('('+txt+')');
        } catch(e) {
            message.error('Request数据源语法错误,格式化失败！');
            return;
        };

        let paramSample = JSON.parse(txt);
        this.props.form.setFieldsValue({
            paramSample: beautify(paramSample, null, 2, 80)
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 24 },
        };
        return (<div>
            <Form onSubmit={this.handleSubmit} ref="form">
                <FormItem {...formItemLayout} label="请求方式:" colon={false}>
                    {getFieldDecorator('method', {
                        initialValue: ['GET'],
                        rules: [{ type: 'array', required: true, message: '请选择请求方式!' }],
                    })(
                        <Cascader options={method} />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="接口地址" hasFeedback  colon={false}>
                    {getFieldDecorator('url', {
                        rules: [{
                            required: true, message: '请输入请求地址!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="apikey" hasFeedback colon={false}>
                    {getFieldDecorator('apikey', {
                        initialValue: 'afa76ed56a93277904d29e59f40f2125',
                        rules: [{
                            required: true, message: '请输入apikey!',
                        }],
                    })(
                        <Input readOnly />
                    )}
                </FormItem>
                <FormItem className="format-btn">
                    <Button type="primary" onClick={this.formatJSON}>格式化</Button>
                </FormItem>
                <FormItem className="res-div"
                    {...formItemLayout}
                    label={(
                        <span>
                            Request
                            <Tooltip title="只支持JSON格式">
                            </Tooltip>
                        </span>
                    )}
                    hasFeedback
                    colon={false}
                >
                    {getFieldDecorator('paramSample', {
                        rules: [{ required: false, message: '请输入请求参数!' }]
                    })(
                        <Input type="textarea" rows="16" placeholder="JSON" onChange={this.requestChange}/>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" size="large">发送</Button>
                </FormItem>
                </Form>
                <div className="resp ant-row">
                    <h3 className="ant-col-3">Response</h3>
                    <Card className="ant-col-24 resp-pre">
                        <Input type="textarea" placeholder="报文模板" rows="18"  value={this.state.repHtml} style={{border: '0px'}}/>
                    </Card>
                </div>
            </div>
        );
    }
}
const DebugForm = Form.create()(MyForm);
export default class Debug extends Component {
	render() {
		return (
			<div id="debug">
				<Layout>
					<Content className="content-w">
						<Layout style={{ padding: '24px 0' , overflow:'hidden'}}>
							<div className="content-tit">
								<p className="tit-blue">在线调试</p>
							</div>
							<DebugForm />
						</Layout>
					</Content>
				</Layout>
			</div>
		);
	}
}