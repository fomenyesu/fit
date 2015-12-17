import React from 'react'
import { Layout, Header , Sidebar, Section, Footer } from 'tb-layout-global'

export default class Demo extends React.Component {
    render() {
        return (
            <Layout>
                <Header height={50}>导航栏</Header>
                <Sidebar width={150} direction='right'>侧边栏</Sidebar>
                <Section>主体</Section>
                <Footer height={40}>页尾</Footer>
            </Layout>
        )
    }
}