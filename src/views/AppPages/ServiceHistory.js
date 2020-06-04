import React, { useEffect } from 'react';
import { Container, Row, CardHeader, Card, CardBody } from 'reactstrap';
import Header from '../../components/Headers/Header';
import { useSelector, useDispatch } from 'react-redux';
import { ServiceHistoryActions } from '../../store/ducks/service-history-duck';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
export default function ServiceHistory() {
    const { SearchBar } = Search;
    const dispatch = useDispatch();
    const serviceHistory = useSelector(store => store?.serviceHistory?.history);
    const isProgressInfo = useSelector(store => store?.settings?.isProgressInfo);
    const isProgress = useSelector(store => store?.serviceHistory?.isProgress);
    const Customer = useSelector(store => store?.settings?.customerInfo?.Customer);
    useEffect(() => {
        if (Customer)
            dispatch(ServiceHistoryActions.getServiceHistory());
    }, [dispatch, Customer]);
    const remote = {
        filter: false,
        pagination: false,
        sort: false,
        cellEdit: false
    };
    const columns = [
        {
            dataField: 'FirstName',
            text: 'FirstName',

        },
        {
            dataField: 'LastName',
            text: 'LastName',

        },
        {
            dataField: 'Details',
            text: 'Details',
        },
        {
            dataField: 'DealerGroupName',
            text: 'DealerGroupName',
        },
        {
            dataField: 'DateAdded',
            text: 'DateAdded',
        },
        {
            dataField: 'Contact_LastName',
            text: 'Contact_LastName',
        },
        {
            dataField: 'Comments',
            text: 'Comments',
        },
        {
            dataField: 'ActivityDescription',
            text: 'ActivityDescription',
        },
        {
            dataField: 'ActivityDateTime',
            text: 'ActivityDateTime',
        },


    ];
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className=" mt--7" fluid>

                <Row>
                    <div className="col">
                        <Card className=" shadow">
                            <CardHeader className=" bg-transparent">
                                <h3 className=" mb-0">Service History</h3>
                            </CardHeader>
                            <CardBody>
                                {isProgress || isProgressInfo
                                    ?
                                    <div className="d-flex justify-content-center align-items-center" >
                                        <div className="spinner-grow" ></div>
                                    </div>
                                    :
                                    <ToolkitProvider
                                        keyField={'id'}
                                        data={serviceHistory || []}
                                        columns={columns}
                                        bootstrap4
                                        search

                                    >{
                                            props => (
                                                <div>
                                                    <div className="d-flex justify-content-end w-100" >
                                                        <SearchBar className="" {...props.searchProps} />
                                                    </div>
                                                    {/* <SearchBar className={"float-right col-md-4 p-3"} {...props.searchProps} /> */}
                                                    <BootstrapTable
                                                        remote={remote}
                                                        keyField={'ActivityID'}
                                                        key={'ActivityID'}
                                                        wrapperClasses={'table-responsive'}
                                                        classes=""
                                                        headerWrapperClasses="text-primary text-left"
                                                        bordered={false}
                                                        headerClasses=""
                                                        bodyClasses="text-left"
                                                        {...props.baseProps}
                                                        // onTableChange={onTableChange}
                                                        noDataIndication={() => <div className="text-center" >{'No results found'}</div>}
                                                        pagination={paginationFactory()}
                                                    />
                                                </div>
                                            )

                                        }
                                    </ToolkitProvider>}
                            </CardBody>
                        </Card>
                    </div>


                </Row>
            </Container>
        </>
    );
}