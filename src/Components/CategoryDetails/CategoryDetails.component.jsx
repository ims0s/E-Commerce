import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Watch } from 'react-loader-spinner'

export default function CategoryDetails() {
    let { id } = useParams()

    function getCategoryId(id) {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
    }
    let { isLoading, data } = useQuery("getCategoryId", () => getCategoryId(id));
    const subCat = data?.data.data;
    return <>
        {isLoading ? <div className=" d-flex justify-content-center mt-5">
            <Watch
                height="80"
                width="80"
                radius="48"
                color="#4fa94d"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />

        </div> : <>
            <div className='container'>
                {data?.data.data ? <div className="row g-3 p-5">
                    {subCat.map((sc) =>

                        <div key={sc._id} className="col-md-4">
                            <div className="bg-main-light p-3 product ">

                                <h4 className="text-center text-main">{sc.name}</h4>
                            </div>
                        </div>
                    )}



                </div>
                    : ""}

            </div>

        </>
        }</>
}