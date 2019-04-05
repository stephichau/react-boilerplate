import React from 'react';
import './Users.scss';
import PageHeader from "../../components/PageHeader/PageHeader";

import {connect} from "react-redux";
import { useTranslation } from 'react-i18next';
import actions from "../../store/actions";
import ReactTable from "react-table";

const users = (props) => {
  const { t } = useTranslation();
  const columns = [
    {
      Header: t('id'),
      accessor: 'id'
    }, {
      Header: t('first name'),
      accessor: 'first_name',
    }, {
      Header: t('last name'),
      accessor: 'last_name'
    }, {
      Header: t('avatar'),
      accessor: 'avatar'
    }
  ];
  const data = props.users;

  return (
    <div className="container-fluid">
      <PageHeader title="users" />
      <ReactTable
        data={data}
        columns={columns}
        previousText={t('previous')}
        nextText={t('next')}
        loadingText={t('loading')}
        noDataText={t('no rows found')}
        pageText={t('page')}
        ofText={t('of')}
        rowsText={t('rows')}
        pageJumpText={t('jump to page')}
        rowsSelectorText={t('rows per page')} />
    </div>
  );
};

const mapStateToProps = (state) => (
  {
    users: state.reqres.users
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    getUsers: dispatch({ type: actions.reqres.GET_USERS_REQUEST })
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(users);