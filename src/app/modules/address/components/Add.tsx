import React from "react";
import * as API from "../../../../API/public";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Add extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            formValues: {
                address: ""
            }
        }
    }

    addAddress() {
        API.add_address(this.state.formValues)
            .then((res: any) => {
                console.log(res.data)
                toast("شهر با موفقیت اضافه شد", {
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
                <div className="row" dir="rtl">
                    <div className="col-md-6">
                        <div className="mb-10">
                            <label className="form-label">نام شهر</label>
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
                        this.addAddress()
                    }}
                    className="btn btn-dark"
                >ثبت</button>
            </section>
        );
    }
}