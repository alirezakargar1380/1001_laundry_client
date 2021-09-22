import React from "react";
import * as API from "../../../../API/public";

export default class Overview extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.get_products()
    }

    get_products() {
        API.get_products()
            .then((res: any) => {
                this.setState({
                    products: res.data.data
                })
            })
    }

    render() {
        const {products} = this.state
        return(
            <main>
                <header>
                    <a href="add" className="btn btn-primary">اضافه کردن محصول</a>
                </header>
                <table className="table table-striped gy-7 gs-7" dir="rtl">
                    <thead>
                    <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                        <th>حذف</th>
                        <th>شناسه</th>
                        <th>نام</th>
                        <th>قیمت</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((res: any, index: number) => (
                        <tr key={index}>
                            <td>-</td>
                            <td>{res.id}</td>
                            <td>{res.name}</td>
                            <td>{res.price}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
        );
    }
}