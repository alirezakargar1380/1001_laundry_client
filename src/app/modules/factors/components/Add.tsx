import React from "react";
import * as API from "../../../../API/public";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Add extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            products: [],
            customers: [],
            searchValues: {
                id: "",
                name: "",
                phone: ""
            },
            formValues: {
                customer_id: 0,
                orders: []
            },

        }
    }

    componentDidMount() {
        this.getProducts()
        this.getCustomer()
    }

    getProducts() {
        API.get_products()
            .then((res: any) => {
                this.setState({
                    products: res.data.data
                })
                var array: any = []
                res.data.data.map((res: any, index: number) => {
                    array[index] = {
                        product_id: 0,
                        number: 0
                    }
                })
                this.setState((prevState: any) => {
                    prevState.formValues.orders = array
                })
                console.log(array)
            })
            .catch((e: any) => {
                // console.log(e.response.data)
            })
    }

    getCustomer() {
        const {searchValues} = this.state
        API.get_customers(searchValues)
            .then((res: any) => {
                this.setState({
                    customers: res.data.data
                })
            })

    }

    render() {
        const {products, customers} = this.state
        return (
            <section>
                <ToastContainer
                    position="bottom-center"
                />
                <div className="row" dir="rtl">
                    <div className="col-md-12">
                        <div className="mb-10">
                            <label className="form-label">فیلترینگ مشتریان</label>
                        </div>
                    </div>
                    <div className="col-md-3 px-3">
                        <div className="mb-10">
                            <input
                                type="text"
                                className="form-control form-control-solid"
                                placeholder="شماره فاکتور"
                                onChange={(e) => {
                                    this.setState((prevState: any) => {
                                        prevState.searchValues.id = e.target.value
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 px-3">
                        <div className="mb-10">
                            <input
                                type="text"
                                className="form-control form-control-solid"
                                placeholder="نام"
                                onChange={(e) => {
                                    this.setState((prevState: any) => {
                                        prevState.searchValues.name = e.target.value
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 px-3">
                        <div className="mb-10">
                            <input
                                type="text"
                                className="form-control form-control-solid"
                                placeholder="شماره تماس"
                                onChange={(e) => {
                                    this.setState((prevState: any) => {
                                        prevState.searchValues.phone = e.target.value
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 px-3">
                        <div className="mb-10">
                            <button
                                onClick={() => { this.getCustomer() }}
                                className="btn btn-primary">اعمال فیلتر</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <section className="col-md-3 mb-10 ml-auto" dir="rtl">
                        <label className="form-label">انتخاب مشتری</label>
                        <select className="form-select form-select-solid"
                                onChange={(e) => {
                                    this.setState((prevState: any) => {
                                        prevState.formValues.customer_id = e.target.value
                                    })
                                }}
                                aria-label="Select example">
                            <option>Open this select menu</option>
                            {customers.map((res: any) => (
                                <option value={res.id}>{res.name+" "+res.phone}</option>
                            ))}

                        </select>
                    </section>
                </div>

                <div className="row" dir="rtl">
                    {products.map((res: any, index: number) => (
                        <div className="col-md-3 px-3">
                            <div className="mb-10">
                                <label className="form-label">{res.name}</label>
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        this.setState({
                                            ['item' + res.id]: {
                                                product_id: res.id,
                                                number: parseInt(e.target.value)
                                            }
                                        })
                                    }}
                                    className="form-control form-control-solid"
                                    placeholder="اینجا وارد کنید"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => {
                        var values: any = {}
                        values.customer_id = parseInt(this.state.formValues.customer_id)
                        var orders: any = []

                        this.state.products.map((res: any, index: number) => {
                            if (this.state['item' + res.id] == undefined)
                                return
                            
                            if (Number.isNaN(this.state['item' + res.id].number) || this.state['item' + res.id].product_id == 0)
                                return
                            orders.push(this.state['item' + res.id])
                        })

                        values.orders = orders
                        // console.log(this.state)
                        // API.add_orders(this.state.formValues)
                        //     .then((res: any) => {console.log(res.data)})
                        console.log(values)
                        API.add_orders(values)
                            .then(() => {
                                toast("فاکتور شما با موفقیت صادر شد", {
                                    type: "info",
                                    theme: "dark"
                                })
                            })
                    }}
                    className="btn btn-dark"
                >ثبت
                </button>
            </section>
        );
    }
}