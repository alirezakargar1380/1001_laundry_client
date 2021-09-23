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
        this.get_customers()
    }

    get_customers() {
        const json = { phone: "", name: "", id: "" }
        API.get_customers(json)
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
                    <a href="add" className="btn btn-primary">اضافه کردن مشتری</a>
                </header>
                <table className="table table-striped gy-7 gs-7" dir={"rtl"}>
                    <thead>
                    <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                        <th>کد اشتراک</th>
                        <th>نام</th>
                        <th>شماره تماس</th>
                        <th>شهر</th>
                        <th>آدرس</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((res: any, index: number) => (
                        <tr key={index}>
                            <td>{res.id}</td>
                            <td>{res.name}</td>
                            <td>{res.phone}</td>
                            <td>{res.state}</td>
                            <td>{res.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
        );
    }
}