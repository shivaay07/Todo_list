import React,{useState} from 'react'

const DisplayTab = ({alltabs}) => {
    const [tab, setTab] = useState({});
    const handleClick=(tabParam) =>{
        // set tab to selected tab object
        setTab(tabParam)
        alert('alert for '+ tabParam.label)
    }
    return (
        <div>
            <fieldset>
                <legend>Dutt's Project</legend>
                    {alltabs.map((getTab,idx) => {
                        let color = 'aquamarine'
                        if(getTab == tab){
                            color = 'teal'
                        }
                        return(
                            <button 
                                key ={idx} 
                                style={{backgroundColor:color}} 
                                onClick ={(e) => handleClick(getTab)}
                            >
                                {getTab.label}
                            </button>
                        )
                    })}
                    <p>{tab.content}</p>
                    <p>{tab.review}</p>
            </fieldset>
            
        </div>
    )
}

export default DisplayTab
