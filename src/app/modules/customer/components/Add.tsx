import React from "react";

export default class Add extends React.Component<any, any> {
    render() {
        return (
            <section>
                <div className="row" dir="rtl">
                    <div className="col-md-6">
                        <div className="mb-10">
                            <label className="form-label">نام و نام خانوادگی مشتری</label>
                            <input
                                type="text"
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
                                className="form-control form-control-solid"
                                placeholder="اینجا وارد کنید"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-10">
                            <label className="form-label">شهر</label>
                            <input
                                type="text"
                                className="form-control form-control-solid"
                                placeholder="اینجا وارد کنید"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-10">
                            <label className="form-label">آدرس</label>
                            <input
                                type="text"
                                className="form-control form-control-solid"
                                placeholder="اینجا وارد کنید"
                            />
                        </div>
                    </div>
                </div>
                <a href="#" className="btn btn-dark">ثبت</a>
            </section>
        );
    }
}