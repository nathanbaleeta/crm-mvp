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

import RoadmapValidationSchema from "../../schema/RoadmapValidationSchema";

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
                    Roadmap Participant Journey
                </Typography>
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    display="block"
                >
                    The Roadmap Participant Journey tracks the journey of roadmap participants from their interest to joining the roadmap to their annual roadmap updates. It captures the different stages of the organisation's progress through the roadmap and key contacts.
                </Typography>


                <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                id="organizationName"
                                label="Organization name"
                                multiline
                                maxRows={4}
                                variant="standard"
                                value={values.organizationName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.organizationName ? errors.organizationName : ""}
                                error={touched.organizationName && Boolean(errors.organizationName)}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl variant="standard">
                                <FormLabel id="currentRoadmapStatus">Current roadmap status</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-error-radios"
                                    name="currentRoadmapStatus"
                                    value={values.currentRoadmapStatus}
                                    onChange={handleChange}
                                    error={touched.currentRoadmapStatus && Boolean(errors.currentRoadmapStatus)}

                                >

                                    <FormControlLabel value="2021" control={<Radio />} label="Roadmap 2021" />
                                    <FormControlLabel value="2022" control={<Radio />} label="Roadmap 2022" />
                                    <FormControlLabel value="none" control={<Radio />} label="Not on Roadmap" />
                                    <FormControlLabel value="progress" control={<Radio />} label="In Progress" />
                                </RadioGroup>
                                <ErrorMessage
                                    name="currentRoadmapStatus"
                                    component="div"
                                    style={{ color: "#e12c2c" }}
                                />
                            </FormControl>
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

                        <Grid item xs={12}>
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
                                name="mostRecentUpdate"
                                id="mostRecentUpdate"
                                select
                                label="Most recent update"
                                value={values.mostRecentUpdate}
                                onChange={handleChange}
                                helperText={touched.mostRecentUpdate && errors.mostRecentUpdate}
                                error={touched.mostRecentUpdate && Boolean(errors.mostRecentUpdate)}
                                fullWidth
                            >
                                {updateOptions.map((option) => (
                                    <MenuItem key={option.id} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        
                        <Grid item xs={6}>
                            <DatePicker
                                disableFuture
                                label="Most recent update date"
                                value={values.mostRecentUpdateDate}
                                onChange={e => setFieldValue('mostRecentUpdateDate', e)}

                                renderInput={(params) =>
                                    <TextField {...params}
                                        id="mostRecentUpdateDate"
                                        name="mostRecentUpdateDate"
                                        disabled="true"
                                        variant="standard"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={touched.mostRecentUpdateDate ? errors.mostRecentUpdateDate : ""}
                                        error={touched.mostRecentUpdateDate && Boolean(errors.mostRecentUpdateDate)}
                                        fullWidth
                                         />}
                            />
                        </Grid>


                        <Grid item xs={12}>
                            <TextField
                                id="notes"
                                label="Notes"
                                multiline
                                maxRows={4}
                                variant="standard"
                                value={values.notes}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.notes ? errors.notes : ""}
                                error={touched.notes && Boolean(errors.notes)}
                                fullWidth
                            />
                        </Grid>



                        <Grid item xs={12}>
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

const RoadmapParticipantJourneyForm = withFormik({
    mapPropsToValues: ({
        organizationName,
        currentRoadmapStatus,
        organizationLeadName,
        organizationLeadEmail,
        mostRecentUpdate,
        mostRecentUpdateDate,
        notes,

    }) => {
        return {
            organizationName: organizationName || "",
            currentRoadmapStatus: currentRoadmapStatus || "",
            organizationLeadName: organizationLeadName || "",
            organizationLeadEmail: organizationLeadEmail || "",
            mostRecentUpdate: mostRecentUpdate || "",
            mostRecentUpdateDate: mostRecentUpdateDate || "",
            notes: notes || ""
        };
    },

    initialValues: {
        organizationName: "",
        currentRoadmapStatus: "",
        organizationLeadName: "",
        organizationLeadEmail: "",
        mostRecentUpdate: "",
        mostRecentUpdateDate: ""
    },

    validationSchema: RoadmapValidationSchema,

    handleSubmit: async (values, { setSubmitting }) => {
        setSubmitting(true);
        alert(values);
        setSubmitting(false);
    },
})(form);

export default RoadmapParticipantJourneyForm;