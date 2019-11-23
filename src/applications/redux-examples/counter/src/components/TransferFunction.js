import React from 'react'

/**
 * 传入组件A 和 获取数据函数，返回组件A'
 * @param WrappedComponent 待转换组件
 * @param selectData 带点抽象意思而抽象出来的function
 * @returns WrappedComponent 转换后组件
 */
function withSubscription(WrappedComponent, selectData) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: selectData(DataSource, props)
            };
        }

        handleChange = () => {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }

        componentDidMount() {
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        render() {
            // 被包装组件接收来自容器组件的所有 prop---{...this.props}，同时也接收一个新的用于 render 的 data={this.state.prop}
            return <WrappedComponent data={this.state.data} {...this.props}></WrappedComponent>
        }
    }
}

class CommentList extends React.Component {

}

class BlogPost extends React.Component {

}

const CommentListWithSubscription = withSubscription(CommentList, (DataSource) => DataSource.getComments())
const BlogPostWithSubscription = withSubscription(BlogPost, (DataSource, props) => DataSource.getBlogPost(props.id))
