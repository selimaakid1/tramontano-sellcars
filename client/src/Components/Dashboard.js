import React, { Component } from 'react'
import { Layout } from 'antd';

class Dashboard extends Component {
    render() {
        const { Header, Footer, Sider, Content } = Layout;
        return (
            <div>

                <Layout>
                    <Sider>
                        <ul>
                            <li>Area Riservata</li>
                            <li>Prenotazioni</li>
                            <li>Profilo</li>
                        </ul>
                    </Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default Dashboard