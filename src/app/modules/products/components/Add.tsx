import React from "react";
import * as API from "../../../../API/public";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Add extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            products: [],
            formValues: {
                price: 0,
                name: ""
            }
        }
    }

    add_products() {
        API.add_product(this.state.formValues)
            .then((res: any) => {
                toast("محصول شما با موفقیت اضافه شد", {
                    type: "info",
                    theme: "dark"
                })
            })

    }

    render() {
        return (
            <section>
                <ToastContainer
                    position="bottom-center"
                />
                <div className="row justify-content-around" dir="rtl">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3 px-3">
                                <div className="mb-10">
                                    <input
                                        type="text"
                                        className="form-control form-control-solid"
                                        placeholder="نام محصول"
                                        onChange={(e) => {
                                            this.setState((prevState: any) => {
                                                prevState.formValues.name = e.target.value
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3 px-3">
                                <div className="mb-10">
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            this.setState((prevState: any) => {
                                                prevState.formValues.price = parseInt(e.target.value)
                                            })
                                        }}
                                        className="form-control form-control-solid"
                                        placeholder="قیمت"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3 px-3">
                                <div className="mb-10">
                                    <button
                                        onClick={() => {
                                            this.add_products()
                                        }}
                                        className="btn btn-primary">ثبت</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}