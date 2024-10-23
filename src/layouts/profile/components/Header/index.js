import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import burceMars from "assets/images/avatar-simmmple.png";
import VuiAvatar from "components/VuiAvatar";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Header() {
  // Assuming you are using the same state management to hold user data
  const userData = {
    fullName: formData.fullName, // Dynamic variable for full name
    email: formData.email,        // Dynamic variable for email
    phone: formData.phone,        // Dynamic variable for phone
    skills: formData.skills,      // Dynamic variable for skills
    availability: formData.availability, // Dynamic variable for availability
    preferences: formData.preferences,     // Dynamic variable for preferences
    socialMedia: formData.socialMedia,     // Dynamic variable for social media
    profileURL: formData.profileURL        // Dynamic variable for profile URL
  };

  return (
    <VuiBox position="relative">
      <Card
        sx={{
          px: 3,
          mt: 2,
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            md={1.7}
            lg={1.5}
            xl={1.2}
            xxl={0.8}
            display="flex"
          >
            <VuiAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item xs={12} md={4.3} lg={4} xl={3.8} xxl={7}>
            <VuiBox
              height="100%"
              mt={0.5}
              lineHeight={1}
              display="flex"
              flexDirection="column"
            >
              <VuiTypography variant="lg" color="white" fontWeight="bold">
                Nice to see you, {userData.fullName}!
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                {userData.email}
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Skills: {userData.skills}
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Phone: {userData.phone}
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Availability: {userData.availability}
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Preferences: {userData.preferences}
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Social Media Links: {userData.socialMedia}
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Profile URL: {userData.profileURL}
              </VuiTypography>
            </VuiBox>
          </Grid>
        </Grid>
      </Card>
    </VuiBox>
  );
}

export default Header;


