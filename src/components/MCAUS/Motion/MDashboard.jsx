import React from 'react'
import MForm from '../../MCAUS/Motion/MForm'
import MPTopics from '../../MCAUS/Motion/MPTopics'

const RCDashboard = () => {
    return (
        <div>
        <div className="flex p-2  flex-col lg:mt-10 lg:mx-40   lg:p-0 md:flex-row gap-4">
               <MForm/>
               <MPTopics/>
              

            </div>



        </div>
    )
}

export default RCDashboard
