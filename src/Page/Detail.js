import React from 'react'

const Detail = () => {
    return (
        <>
            <div className='container pt-5 Detail pb-5'>
                <div className='detail-img'>
                    <div className='row g-1 pt-2 text-white' style={{ textAlign: 'center' }}>
                        <div className='col-lg-3 about-detail  pt-5 mt-5'>
                            <i class="fa-solid fa-paw icon12"></i>
                            <h3 className='pt-3'>12345</h3>
                            <p>Total Animal</p>
                        </div>

                        <div className='col-lg-3 about-detail  pt-5 mt-5'>
                        <i class="fa-solid fa-users icon12"></i>
                            <h3 className='pt-3'>12345</h3>
                            <p>Daily Vigitors</p>
                        </div>

                        <div className='col-lg-3 about-detail  pt-5 mt-5'>
                        <i class="fa-solid fa-certificate icon12"></i>
                            <h3 className='pt-3'>12345</h3>
                            <p>Total Membership</p>
                        </div>

                        <div className='col-lg-3 about-detail  pt-5 mt-5'>
                        <i class="fa-solid fa-shield-halved icon12"></i>
                            <h3 className='pt-3'>12345</h3>
                            <p>Save Wild Life</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail