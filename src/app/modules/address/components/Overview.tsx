import React from "react";
import * as API from "../../../../API/public";

export default class Overview extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            address: []
        }
    }

    componentDidMount() {
        this.get_address()
    }

    get_address() {
        API.get_address()
            .then((res: any) => {
                this.setState({
                    address: res.data.data
                })
            })
    }

    render() {
        const {address} = this.state
        return(
            <main>
                <header>
                    <a href="add" className="btn btn-primary">اضافه کردن شهر</a>
                </header>
                <table className="table table-striped gy-7 gs-7" dir={"rtl"}>
                    <thead>
                    <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                        <th>حذف</th>
                        <th>شهر</th>
                    </tr>
                    </thead>
                    <tbody>
                    {address.map((res: any, index: number) => (
                        <tr key={index}>
                            <td>-</td>
                            <td>{res.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
        );
    }
}