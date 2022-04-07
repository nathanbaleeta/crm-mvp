import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";

import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';
import FormGroup from "@mui/material/FormGroup";
import { CheckboxWithLabel } from "formik-material-ui";
import MenuItem from '@mui/material/MenuItem';
import DatePicker from '@mui/lab/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


import MembershipValidationSchema from "../../schema/MembershipValidationSchema";


const updateOptions = [
    {
        label: "Beginning of year",
        value: "Beginning of year",
    },
    {
        label: "Mid-year",
        value: "Mid-year",
    },
    {
        label: "End of year",
        value: "End of year",
    }
];


const membershipJourneyMilestoneOptions = [
    {
        label: "Initial Connect",
        value: "Initial Connect",
    },
    {
        label: "Pre-Screening Process",
        value: "Pre-Screening Process",
    },
    {
        label: "Recruitment Call",
        value: "Recruitment Call",
    },
    {
        label: "Current Member",
        value: "Current Member",
    },
    {
        label: "Not Fit for Membership",
        value: "Not Fit for Membership",
    },
    {
        label: "Welcome Pack Shared",
        value: "Welcome Pack Shared",
    },
    {
        label: "Connected to Comms",
        value: "Connected to Comms",
    }
];

const environmentOptions = [
    {
        label: "Google Chrome",
        value: "Google Chrome",
    },
    {
        label: "Microsoft Edge",
        value: "Microsoft Edge",
    },
    {
        label: "Mozilla Firefox",
        value: "Mozilla Firefox",
    },
    {
        label: "Apple Safari",
        value: "Apple Safari",
    },
    {
        label: "Windows",
        value: "Windows",
    },
    {
        label: "Mac",
        value: "Mac",
    },
    {
        label: "Linux",
        value: "Linux",
    },
];

const form = (props) => {
    const {
        classes,
        values,
        setFieldValue,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
    } = props;


    return (
        <div>
            <Box sx={{ marginTop: '2vh' }}
                autoComplete="off">
                <Typography variant="h4" component="div" gutterBottom>
                    Membership Journey
                </Typography>
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    display="block"
                >
                    The Roadmap Participant Journey tracks the journey of roadmap participants from their interest to joining the roadmap to their annual roadmap updates. It captures the different stages of the organisation's progress through the roadmap and key contacts.
                </Typography>


                <Form onSubmit={handleSubmit} style={{ width: '100%', paddingTop: '3vh' }}>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
                            <FormControl variant="standard">
                                <FormLabel id="currentStatus">Current roadmap status</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-error-radios"
                                    name="currentStatus"
                                    value={values.currentStatus}
                                    onChange={handleChange}
                                    error={touched.currentStatus && Boolean(errors.currentStatus)}

                                >

                                    <FormControlLabel value="memeber" control={<Radio />} label="Member" />
                                    <FormControlLabel value="in progress" control={<Radio />} label="In Progress" />
                                    <FormControlLabel value="non-member" control={<Radio />} label="Non-member" />
                                </RadioGroup>
                                <ErrorMessage
                                    name="currentStatus"
                                    component="div"
                                    style={{ color: "#e12c2c" }}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <DatePicker
                                disableFuture
                                label="Date of Membership"
                                value={values.dateOfMembership}
                                onChange={e => setFieldValue('dateOfMembership', e)}

                                renderInput={(params) =>
                                    <TextField {...params}
                                        id="dateOfMembership"
                                        name="dateOfMembership"
                                        disabled="true"
                                        variant="standard"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={touched.dateOfMembership ? errors.dateOfMembership : ""}
                                        error={touched.dateOfMembership && Boolean(errors.dateOfMembership)}
                                        fullWidth
                                         />}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="organizationLeadName"
                                label="Organization Lead name"
                                multiline
                                maxRows={4}
                                variant="standard"
                                value={values.organizationLeadName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.organizationLeadName ? errors.organizationLeadName : ""}
                                error={touched.organizationLeadName && Boolean(errors.organizationLeadName)}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="organizationLeadEmail"
                                label="Organization Lead Email"
                                variant="standard"
                                value={values.organizationLeadEmail}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.organizationLeadEmail ? errors.organizationLeadEmail : ""}
                                error={touched.organizationLeadEmail && Boolean(errors.organizationLeadEmail)}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                variant="standard"
                                name="membershipJourneyMilestone"
                                id="membershipJourneyMilestone"
                                select
                                label="Membership journey milestone"
                                value={values.membershipJourneyMilestone}
                                onChange={handleChange}
                                helperText={touched.membershipJourneyMilestone && errors.membershipJourneyMilestone}
                                error={touched.membershipJourneyMilestone && Boolean(errors.membershipJourneyMilestone)}
                                fullWidth
                            >
                                {membershipJourneyMilestoneOptions.map((option) => (
                                    <MenuItem key={option.id} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        

                        <Grid item xs={12}>
                        <br/>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                color="primary"
                            >
                                {!isSubmitting ? "Save" : "Submitting ..."}
                            </Button>

                        </Grid>
                        <Grid item xs={12} />
                    </Grid>

                </Form>
            </Box>
        </div>
    );
};

const MembershipJourneyForm = withFormik({
    mapPropsToValues: ({
        currentStatus,
        dateOfMembership,
        organizationLeadName,
        organizationLeadEmail,
        membershipJourneyMilestone
        

    }) => {
        return {
            currentStatus: currentStatus || "",
            dateOfMembership: dateOfMembership || "",
            organizationLeadName: organizationLeadName || "",
            organizationLeadEmail: organizationLeadEmail || "",
            membershipJourneyMilestone: membershipJourneyMilestone || "",
          
        };
    },

    initialValues: {
        currentStatus: "",
        dateOfMembership: "",
        organizationLeadName: "",
        organizationLeadEmail: "",
        membershipJourneyMilestone: ""
    },

    validationSchema: MembershipValidationSchema,

    handleSubmit: async (values, { setSubmitting }) => {
        setSubmitting(true);
        alert(values);
        setSubmitting(false);
    },
})(form);

export default MembershipJourneyForm;