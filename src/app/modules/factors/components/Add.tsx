import React from "react";
import * as API from "../../../../API/public";

export default class Add extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            products: [],
            formValues: {
                customer_id: 10,
                orders: []
            },

        }
    }

    componentDidMount() {
        this.getProducts()
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

    addCustomer() {
        API.add_customer(this.state.formValues)
            .then((res: any) => {
                console.log(res.data)
            })

    }

    render() {
        const {products} = this.state
        return (
            <section>
                <div className="row" dir="rtl">
                    <div className="col-md-12">
                        <div className="mb-10">
                            <label className="form-label">فیلترینگ</label>
                            <input
                                type="text"
                                className="form-control form-control-solid"
                                placeholder="اینجا وارد کنید"
                            />
                        </div>
                    </div>
                </div>
                <div className="row" dir="rtl">
                    {products.map((res: any, index: number) => (
                        <div className="col-md-3">
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
                                        // this.setState((prevState: any) => {
                                        //     prevState.formValues.orders[index].product_id = res.id
                                        //     prevState.formValues.orders[index].number = parseInt(e.target.value)
                                        // })
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
                        // var values: any = {}
                        // values.customer_id = 10
                        var orders: any = []
                        // this.state.formValues.orders.map((res: any, index: number) => {
                        //     if (res.product_id == 0 || res.number == 0)
                        //     {
                        //         console.log("im emty")
                        //         delete this.state.formValues.orders[index]
                        //     }
                        // })
                        // // console.log(this.state.formValues.orders)
                        // this.state.formValues.orders.map((res: any, index: number) => {
                        //     console.log(res)
                        //     orders.push(res)
                        // })
                        // console.log("--------------------------->>>>>>>>>>>>>>")
                        // console.log(values)
                        // console.log(orders)
                        this.state.products.map((res: any, index: number) => {
                            if (this.state['item' + res.id] == undefined)
                                return
                            
                            if (Number.isNaN(this.state['item' + res.id].number) || this.state['item' + res.id].product_id == 0)
                                return
                            orders.push(this.state['item' + res.id])
                            // if (this.state['item' + res.id]) {
                            //     console.log(this.state['item'+res.id])
                            //     orders.push(this.state['item' + res.id])
                            // }
                        })
                        console.log(orders)
                        // console.log(this.state)
                        // API.add_orders(this.state.formValues)
                        //     .then((res: any) => {console.log(res.data)})
                        // this.getProducts()
                    }}
                    className="btn btn-dark"
                >ثبت
                </button>
            </section>
        );
    }
}