import { createUniqueKey } from "../../../../core/services/RandomKey/CreateUniqueKey";
import { LocationIcon } from "./LocationIcon/LocationIcon"
import { PositionForm } from "./PositionForm/PositionForm"


export const LocationForm = ({xPosition, yPosition, chartData, imageId, isActive, setActive})=>{

    const saveLocationForm = (xRealCoordinate, yRealCoordinate) =>{

        const displayImage = document.getElementById(imageId);

        const xPixelCoordinate = (xPosition - displayImage.offsetLeft) * chartData.imageWidth / displayImage.offsetWidth;
        const yPixelCoordinate = (yPosition - displayImage.offsetTop) * chartData.imageHeight / displayImage.offsetHeight;

        const existingKeys = chartData.selectedAxis.map((axis)=>(axis.key));
        const locationKey = createUniqueKey("axis_", existingKeys, 10);

        const newLocation = {
            key: locationKey,
            xPixelCoordinate,
            yPixelCoordinate,
            xRealCoordinate,
            yRealCoordinate
        }

        console.log(newLocation);
        setActive(false);

    }

    return(
        <>
            <LocationIcon
                xPosition = {xPosition - 16}
                yPosition = {yPosition - 16}
                isActive = {isActive}
                setActive = {setActive}
            />
            <PositionForm
                xPosition = {xPosition + 30}
                yPosition = {yPosition}
                setFormActive = {setActive}
                onSaveForm = {saveLocationForm}
            />
        </>
    )
}