import React from 'react';
import './Colors.scss';
import PageHeader from "../../components/PageHeader/PageHeader";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { useTranslation } from 'react-i18next';
import actions from "../../store/actions";
import ReactTable from "react-table";

const colors = (props) => {
  const { t } = useTranslation();
  const columns = [
    {
      Header: t('id'),
      accessor: 'id'
    }, {
      Header: t('name'),
      accessor: 'name',
    }, {
      Header: t('year'),
      accessor: 'year'
    }, {
      Header: t('hexadecimal value'),
      accessor: 'color'
    }, {
      Header: t('pantone value'),
      accessor: 'pantone_value'
    }
  ];
  const data = props.colors;

  return (
    <div className="container-fluid">
      <PageHeader title="colors" />
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
    colors: state.reqres.colors
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    getColors: dispatch({ type: actions.reqres.GET_COLORS_REQUEST })
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(colors));