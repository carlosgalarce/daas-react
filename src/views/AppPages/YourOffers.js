import React, { useEffect } from 'react';
import { Container, Row, CardHeader, Card, CardBody } from 'reactstrap';
import Header from '../../components/Headers/Header';
import { useSelector, useDispatch } from 'react-redux';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { YourOffersActions } from '../../store/ducks/your-offers-duck/actions';
export default function YourOffers() {
    const { SearchBar } = Search;
    const dispatch = useDispatch();
    const coupons = useSelector(store => store?.yourOffers?.coupons);
    const isProgressInfo = useSelector(store => store?.settings?.isProgressInfo);
    const isProgress = useSelector(store => store?.yourOffers?.isProgress);
    const Customer = useSelector(store => store?.settings?.customerInfo?.Customer);
    useEffect(() => {
        if (Customer)
            dispatch(YourOffersActions.getCoupons());
    }, [dispatch, Customer]);
    const remote = {
        filter: false,
        pagination: false,
        sort: false,
        cellEdit: false
    };
    const columns = [
        {
            dataField: 'coupon_code_id',
            text: 'coupon_code_id',
            sort: true
        },
        {
            dataField: 'coupon_code',
            text: 'coupon_code',
            sort: true
        },
        {
            dataField: 'coupon_description',
            text: 'coupon_description',
            sort: true
        },
        {
            dataField: 'reward_type',
            text: 'reward_type',
            sort: true
        },
        {
            dataField: 'field_description',
            text: 'field_description',
            sort: true
        },
        {
            dataField: 'effective_from_date',
            text: 'effective_from_date',
            sort: true
        },
        {
            dataField: 'effective_to_date',
            text: 'effective_to_date',
            sort: true
        },
        {
            dataField: 'dlrid',
            text: 'dlrid',
            sort: true
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
                                <h3 className=" mb-0 text-center ">Your Offers</h3>
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
                                        data={coupons || []}
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
                                                        headerWrapperClasses="thead-light "
                                                        bordered={false}
                                                        headerClasses=""
                                                        bodyClasses=""
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