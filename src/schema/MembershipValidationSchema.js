import * as Yup from "yup";

const MembershipValidationSchema = Yup.object().shape({
    currentStatus: Yup.string()
        .required('Please select an option'),
    dateOfMembership: Yup.date()
        .required('Please select a date'),
    organizationLeadName: Yup.string()
        .required("Required!")
        .min(5, "Too Short!"),
    organizationLeadEmail: Yup.string()
        .email("Enter a valid email")
        .required("Required!"),
    membershipJourneyMilestone: Yup.string()
        .required('Please select an option'),

    })


export default MembershipValidationSchema;