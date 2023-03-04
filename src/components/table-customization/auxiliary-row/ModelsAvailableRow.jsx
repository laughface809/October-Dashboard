import React from 'react'

export const ModelsAvailableRow = (props) => {

  const {
    data,
    columns,
    auxiliaryRow,
    settings,
    descriptor,
    updateRow,
    dataRowsContainerRef: parentContainerRef
  } = props

  const cssClass = getRowClass(settings, 'row')

  const transactions = data.modelsAvailable

  return (
    <React.Fragment>
      {transactions &&
        <React.Fragment>
          <div className={cssClass}>
            <div className='sub-table-container'>
              <div className='sub-table-padding'></div>
              <div className='sub-table-rows-container'>

                <div className='sub-table-heading'>Available transactions:</div>

                <div className={'sub-table-header-row'}>

                  <div
                    className='header-cell sub-table-header-cell'
                    style={{ flex: '1' }}
                  >
                    <span>Name</span>
                  </div>

                  <div
                    className='header-cell sub-table-header-cell'
                    style={{ flex: '1' }}
                  >
                    <span>Engine</span>
                  </div>

                  <div
                    className='header-cell sub-table-header-cell'
                    style={{ flex: '1' }}
                  >
                    <span>Capacity</span>
                  </div>

                  <div
                    className='header-cell sub-table-header-cell'
                    style={{ flex: '1' }}
                  >
                    <span>Power</span>
                  </div>

                  <div
                    className='header-cell sub-table-header-cell'
                    style={{ flex: '1' }}
                  >
                    <span>Gearbox</span>
                  </div>

                  <div
                    className='header-cell sub-table-header-cell'
                    style={{ flex: '1' }}
                  >
                    <span>Color</span>
                  </div>

                </div>

                {transactions.map((transaction, i) => (
                  <div
                    className={cssClass + ' sub-table-row'}
                    key={i}
                  >

                    <div
                      className='cell'
                      style={{ flex: '1' }}
                    >
                      {transaction.name}
                    </div>

                    <div
                      className='cell'
                      style={{ flex: '1' }}
                    >
                      {transaction.engine}
                    </div>

                    <div
                      className='cell'
                      style={{ flex: '1' }}
                    >
                      {transaction.capacity}
                    </div>

                    <div
                      className='cell'
                      style={{ flex: '1' }}
                    >
                      {transaction.power}
                    </div>

                    <div
                      className='cell'
                      style={{ flex: '1' }}
                    >
                      {transaction.gearbox}
                    </div>

                    <div
                      className='cell'
                      style={{ flex: '1' }}
                    >
                      {transaction.color}
                    </div>

                  </div>
                ))}

              </div>
            </div>
          </div>
        </React.Fragment>
      }
    </React.Fragment>
  )
}