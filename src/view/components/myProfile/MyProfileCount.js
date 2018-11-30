import React from 'react';


const MyProfileCount = () => {
    return (
        <div className="row">
            <div className="w-50 col-5 m-auto text-center" >
                <button type="button" class="btn btn-primary mr-5">
                    Posts <span class="badge badge-light ml-2">10</span>
                </button>
                <button type="button" class="btn btn-primary">
                    Comments <span class="badge badge-light ml-2">9</span>
                </button>
            </div>
        </div>
    )
}

export { MyProfileCount }