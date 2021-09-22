import React from "react";
import * as API from "../../../../API/public";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Add extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            address: [],
            formValues: {}
        }
    }

    componentDidMount() {
        this.getAddress()
    }

    getAddress() {
        API.get_address()
            .then((res: any) => {
                this.setState({
                    address: res.data.data
                })
                console.log(res.data.data)
            })
            .catch((e:any)=> {
                console.log(e.response.data)
            })
    }

    addCustomer() {
        API.add_customer(this.state.formValues)
            .then((res: any) => {
                console.log(res.data)
                toast("کاربر شما با موفقیت اضافه شد", {
                    type: "info",
                    theme: "dark"
                })
            })

    }

    render() {
        const {address} = this.state
        return (
            <section>
                <ToastContainer
                    position="bottom-center"
                />
                <div className="row" dir="rtl">
                    <div className="col-md-6">
                        <div className="mb-10">
                            <label className="form-label">نام و نام خانوادگی مشتری</label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    this.state.formValues.name = e.target.value
                                }}
                                className="form-control form-control-solid"
                                placeholder="اینجا وارد کنید"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-10">
                            <label className="form-label">شماره تماس</label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    this.state.formValues.phone = e.target.value
                                }}
                                className="form-control form-control-solid"
                                placeholder="اینجا وارد کنید"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-10">
                            <label className="form-label">شهر</label>
                            <select className="form-select form-select-solid"
                                    onChange={(e) => {
                                        this.state.formValues.state = e.target.value
                                    }}
                                    aria-label="Select example">
                                <option>انتخاب کنید</option>
                                {address.map((res: any, index: number) => (
                                    <option key={index} value={res.address}>{res.address}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-10">
                            <label className="form-label">آدرس</label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    this.state.formValues.address = e.target.value
                                }}
                                className="form-control form-control-solid"
                                placeholder="اینجا وارد کنید"
                            />
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => {
                        this.addCustomer()
                    }}
                    className="btn btn-dark"
                >ثبت</button>
            </section>
        );
    }
}