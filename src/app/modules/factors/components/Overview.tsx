import React from "react";
import * as API from "../../../../API/public";

export default class Overview extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        this.get_orders()
    }

    get_orders() {
        API.get_orders()
            .then((res: any) => {
                this.setState({
                    customers: res.data.data
                })
            })
    }

    render() {
        const {customers} = this.state
        return(
            <main>
                <header>
                    <a href="add" className="btn btn-primary">اضافه کردن فاکتور</a>
                </header>
                <table className="table table-striped gy-7 gs-7">
                    <thead>
                    <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                        <th>شماره فاکتور</th>
                        <th>نام</th>
                        <th>شماره تماس</th>
                        <th>سفارشات</th>
                        <th>قیمت نهایی فاکتور</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((res: any, index: number) => (
                        <tr key={index}>
                            <td>{res.id}</td>
                            <td>{res.customer.name}</td>
                            <td>{res.customer.phone}</td>
                            {/*<td>*/}
                            {/*    <ul>*/}
                            {/*        {res.orders.map((res: any) => {*/}
                            {/*            console.log(res)*/}
                            {/*            console.log(res.number)*/}
                            {/*            let price = res.products[0].price * res.number*/}
                            {/*            console.log(price)*/}
                            {/*        })}*/}
                            {/*        <li>afsdf</li>*/}
                            {/*        <li>asdf</li>*/}
                            {/*    </ul>*/}
                            {/*</td>*/}
                            <td>
                                <table className="table table-striped gy-7 gs-7">
                                    <thead>
                                    <tr>
                                        <td className="p-0">نام محصول</td>
                                        <td className="p-0">تعداد</td>
                                        <td className="p-0">قیمت</td>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {res.orders.map((res: any) => {
                                        let price = res.products[0].price * res.number
                                        return(
                                            <tr>
                                                <td className="p-0">{res.products[0].name}</td>
                                                <td className="p-0">{res.number}</td>
                                                <td className="p-0">{price}</td>
                                            </tr>
                                        )
                                    })}

                                    </tbody>
                                </table>
                            </td>
                            <td>{res.total_price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
        );
    }
}