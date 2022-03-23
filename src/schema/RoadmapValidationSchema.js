import * as Yup from "yup";

const RoadmapValidationSchema = Yup.object().shape({
    organizationName: Yup.string()
        .required("Required!")
        .min(5, "Too Short!"),
    currentRoadmapStatus: Yup.string()
        .required('Please select an option'),
    organizationLeadName: Yup.string()
        .required("Required!")
        .min(5, "Too Short!"),
    organizationLeadEmail: Yup.string()
        .email("Enter a valid email")
        .required("Required!"),
    mostRecentUpdate: Yup.string()
        .required('Please select an option'),
    mostRecentUpdateDate: Yup.date()
        .required('Please select a date'),
    notes: Yup.string()
        .required("Required!")
        .min(5, "Too Short!")
    })


export default RoadmapValidationSchema;