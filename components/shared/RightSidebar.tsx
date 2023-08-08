import SuggestedCommunities from "../algos/SuggestedCommunities";
import SuggestedUsers from "../algos/SuggestedUsers";

function RightSidebar(){
    return (
        <section className="custom-scrollbar rightsidebar">
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1">
                
                    <SuggestedCommunities />
                </h3>
            </div>
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1">
                   
                    <SuggestedUsers/>
                </h3>
            </div>
        </section>
    )
}

export default RightSidebar;