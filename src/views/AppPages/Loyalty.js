import React, { useEffect } from 'react';
import { Container, Row, CardHeader, Card, CardBody } from 'reactstrap';
import Header from '../../components/Headers/Header';
import { useSelector, useDispatch } from 'react-redux';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { LoyaltyActions } from '../../store/ducks/loyalty-duck';
export default function Loyalty() {
    const { SearchBar } = Search;
    const dispatch = useDispatch();
    const rewardPoints = useSelector(store => store?.loyalty?.rewardPoints);
    const isProgressInfo = useSelector(store => store?.settings?.isProgressInfo);
    const isProgress = useSelector(store => store?.loyalty?.isProgress);
    const Customer = useSelector(store => store?.settings?.customerInfo?.Customer);
    useEffect(() => {
        if (Customer)
            dispatch(LoyaltyActions.getRewardPoints());
    }, [dispatch, Customer]);
    const remote = {
        filter: false,
        pagination: false,
        sort: false,
        cellEdit: false
    };
    const columns = [
        {
            dataField: 'reward_points',
            text: 'Reward Points',
            sort: true
        },
        {
            dataField: 'reward_type',
            text: 'Reward Type',
            sort: true
        },
        {
            dataField: 'social_media_id',
            text: 'Social Media Id',
            sort: true
        },
        {
            dataField: 'member_customer_id',
            text: 'Member Customer Id',
            sort: true
        },
        {
            dataField: 'registration_date',
            text: 'Registration Date',
            sort: true
        },
        {
            dataField: 'reward_type_field_description',
            text: 'Reward Type Field Description',
            sort: true
        },
        {
            dataField: 'operational_type_field_description',
            text: 'Operational Type Field Description',
            sort: true
        },
        {
            dataField: 'membership_type',
            text: 'Membership Type',
            sort: true
        },
        {
            dataField: 'discount_value',
            text: 'Discount Value',
            sort: true
        },
        {
            dataField: 'discount_unit',
            text: 'Discount Unit',
            sort: true
        },
        {
            dataField: 'membership_benefits',
            text: 'Membership Benefits',
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
                                <h3 className=" mb-0 text-center ">Loyalty</h3>
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
                                        data={rewardPoints || []}
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