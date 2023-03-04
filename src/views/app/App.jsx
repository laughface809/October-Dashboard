import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import './../../styles.css'
import axios from '../../helpers/axios-helper'
import { v4 as guid } from 'uuid'
import FirstContent from '../../components/content/first-content'
import { useTranslation } from 'react-i18next';

import { DeleteCell } from '../../components/table-customization/cell/DeleteCell'
import { Table } from '../../components/table/Table'
import { OBJECT_PROPERTY_ABOUT, OBJECT_PROPERTY_NAME, SORT_DIRECTION_DESCENDING } from '../../components/table/constants'
import { TextAreaCell } from '../../components/table/cell/TextAreaCell'
import { Toastr } from '../../components/toastr/Toastr'
import { getSortByFn, paginate } from '../../helpers/array-helper'

import { transactionsData, deleteTransactionData, transactionsAsData } from '../../redux/transactions/actions'

import { store, LOGOUT } from '../../redux/user/store'
import { getTransactionsData } from '../../redux/transactions/selectors'
import SecondContent from '../../components/content/second-content'
import ThirdContent from '../../components/content/third-content'
import SideBar from '../../components/sidebar/sidebar'
import Header from '../../components/header/header'
import Sider from '../../components/sider'

const App = props => {
  const { transactionAsData, transactionsAsData, transactionsData, deleteTransactionData } = props

  const [tableGuid] = useState(guid())
  const [filterConfig, setFilterConfig] = useState(null)

  const getTableData = (filterConfig) => {

    if (!filterConfig) {
      return []
    }

    let transactions2 = transactionAsData.sort(getSortByFn(filterConfig.columnName))

    if (!filterConfig.isAscending) {
      transactions2 = transactionAsData.reverse()
    }

    return paginate(transactions2, filterConfig.size, filterConfig.page)
  }

  const [tableData, setTableData] = useState(getTableData(filterConfig))

  useEffect(() => {
    axios.get('/v1/transactions').then((result) => {
      transactionsAsData(result.data)
    })
  }, [])

  useEffect(() => {
    setTableData(getTableData(filterConfig))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterConfig, transactionAsData])

  const { t, i18n } = useTranslation();
  const [sidebarModel, setSidebarModel] = React.useState(false)

  return (
    <React.Fragment>
      <div class="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true"></div>
        <div class="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true"></div>
        <div class="relative min-h-screen flex flex-col">
          {/* HEADER */}
          <Header lang={i18n} setSidebarModel={setSidebarModel} langs={t} />
          {/* BODIES */}
          <div class="flex-grow w-full mx-auto xl:pr-8 lg:flex bg-[#e5e7eb]">

            <div class="flex-1 min-w-0 bg-white xl:flex">
              <div class="xl:flex-shrink-0 min-[1800px]:w-[24rem] xl:w-72 bg-white shadow-xl mr-0.5">
                {/* SIDEBAR */}
                <SideBar lang={t} sidebarModel={sidebarModel} />
              </div>
              <div class="bg-[#e5e7eb] lg:min-w-0 lg:flex-1">
                <div class="h-full py-6 pl-4 sm:pl-6 lg:pl-8 pr-4 lg:pr-0">
                  <div class="relative h-full">
                    {/* CONTENT */}
                    <FirstContent lang={t} />
                    <SecondContent lang={t} />
                    <ThirdContent lang={t} />
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-[#e5e7eb] pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 xl:pr-0">
              <div class="h-full pl-6 py-6 h-full pl-6 py-6 2xl:w-96 min-[1800px]:w-[32rem] lg:w-80 bg-[#e5e7eb]">
                <div class="relative">
                  <div class="mt-4 rounded-2xl px-8 xs:px-4 md:px-6 xl:px-8 py-4 pb-12 shadow-[0px_4px_7px_-3px_rgba(0,0,0,0.2)] bg-white h-full">
                    <Sider lang={t} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    transactionAsData: getTransactionsData(state)
  }
}

const mapDispatchToProps = { transactionsData, deleteTransactionData, transactionsAsData }

export default connect(mapStateToProps, mapDispatchToProps)(App)