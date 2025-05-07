import PriceCard from "@/app/components/PriceCard";
import React from "react";

const UpdatePlans=()=>{

    return(
        <div className="flex flex-wrap gap-4">
            <PriceCard plan="Delta" price="500" lowReminders="10" mediumReminders="5" highReminders="2"/>
            <PriceCard plan="Delta Plus" price="1000" lowReminders="10" mediumReminders="6" highReminders="2"/>
            <PriceCard plan="Delta Premium" price="2000" lowReminders="25" mediumReminders="10" highReminders="8"/>
        </div>
    )
}

export default UpdatePlans;