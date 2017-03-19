import React from 'react';
import {Link} from 'react-router';
import { browserHistory} from 'react-router';

import styles from './css/HeaderBar.css'

import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import Book from 'material-ui/svg-icons/action/book';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Apps from 'material-ui/svg-icons/navigation/apps'

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends React.Component {

    static propTypes = {
      children: React.PropTypes.node.isRequired,
      defaultValue: React.PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const ListExampleSelectable = () => (
    <SelectableList defaultValue={3}>
      <Subheader>监控系统</Subheader>
      <ListItem value={1} primaryText="首页"   leftIcon={<Apps />} />
      <ListItem value={2} primaryText="访问监控"  leftIcon={<ContentDrafts /> }
          nestedItems={[
          <ListItem value={21} primaryText="地域分布"   leftIcon={<ContentInbox   /> }             />,
            ]}
      />
      <ListItem value={3} primaryText="日志分析"  leftIcon={<ContentSend />  } initiallyOpen={true}
            nestedItems={[
                <ListItem value={31} primaryText="商户返回时长报表"   leftIcon={<ContentInbox   /> }  containerElement={<Link to="/shfhscbb" />}            />,
            ]}
      />
      <ListItem value={4} primaryText="预警系统"  leftIcon={<ActionGrade /> }   initiallyOpen={true}
            nestedItems={[
                <ListItem value={41} primaryText="异常预警"   leftIcon={<ContentInbox /> } containerElement={<Link to="/two" />} />,
                <ListItem value={42} primaryText="业务预警"   leftIcon={<ContentInbox /> } />,
                <ListItem value={43} primaryText="预警设置"   leftIcon={<ContentInbox /> } />,
            ]}
      />
      <ListItem value={5} primaryText="服务器监控"   leftIcon={<ContentDrafts />}    initiallyOpen={true}
            nestedItems={[
                <ListItem value={51} primaryText="redis缓存监控"   leftIcon={<ContentInbox /> }  />,
                <ListItem value={52} primaryText="Mongodb集合监控"   leftIcon={<ContentInbox  /> }/>,
                <ListItem value={53} primaryText="MySql日志监控"   leftIcon={<ContentInbox  /> } />,
            ]}
      />
      <ListItem value={6} primaryText="意见反馈" leftIcon={<Book />}  />
    </SelectableList>
);

export default ListExampleSelectable;

