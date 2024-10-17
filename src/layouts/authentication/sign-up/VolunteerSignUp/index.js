/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

// Icons
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";
import GradientBorder from "examples/GradientBorder";

// Vision UI Dashboard assets
import radialGradient from "assets/theme/functions/radialGradient";
import rgba from "assets/theme/functions/rgba";
import palette from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgSignIn from "assets/images/signUpImage.png";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout
      title="Welcome!"
      color="white"
      image={bgSignIn}

      cardContent
    >
      <GradientBorder borderRadius={borders.borderRadius.form} minWidth="100%" maxWidth="100%">
        <VuiBox
          component="form"
          role="form"
          borderRadius="inherit"
          p="45px"
          sx={({ palette: { secondary } }) => ({
            backgroundColor: secondary.focus,
          })}
        >
          <VuiTypography
            color="white"
            fontWeight="bold"
            textAlign="center"
            mb="24px"
            sx={({ typography: { size } }) => ({
              fontSize: size.lg,
            })}
          >
            Register with
          </VuiTypography>
          <Stack mb="25px" justifyContent="center" alignItems="center" direction="row" spacing={2}>
            <GradientBorder borderRadius="xl">
              <a href="#">
                <IconButton
                  transition="all .25s ease"
                  justify="center"
                  align="center"
                  bg="rgb(19,21,54)"
                  borderradius="15px"
                  sx={({ palette: { secondary }, borders: { borderRadius } }) => ({
                    borderRadius: borderRadius.xl,
                    padding: "25px",
                    backgroundColor: secondary.focus,
                    "&:hover": {
                      backgroundColor: rgba(secondary.focus, 0.9),
                    },
                  })}
                >
                  <Icon
                    as={FaFacebook}
                    w="30px"
                    h="30px"
                    sx={({ palette: { white } }) => ({
                      color: white.focus,
                    })}
                  />
                </IconButton>
              </a>
            </GradientBorder>
            <GradientBorder borderRadius="xl">
              <a href="#">
                <IconButton
                  transition="all .25s ease"
                  justify="center"
                  align="center"
                  bg="rgb(19,21,54)"
                  borderradius="15px"
                  sx={({ palette: { secondary }, borders: { borderRadius } }) => ({
                    borderRadius: borderRadius.xl,
                    padding: "25px",
                    backgroundColor: secondary.focus,
                    "&:hover": {
                      backgroundColor: rgba(secondary.focus, 0.9),
                    },
                  })}
                >
                  <Icon
                    as={FaApple}
                    w="30px"
                    h="30px"
                    sx={({ palette: { white } }) => ({
                      color: white.focus,
                    })}
                  />
                </IconButton>
              </a>
            </GradientBorder>
            <GradientBorder borderRadius="xl">
              <a href="#">
                <IconButton
                  transition="all .25s ease"
                  justify="center"
                  align="center"
                  bg="rgb(19,21,54)"
                  borderradius="15px"
                  sx={({ palette: { secondary }, borders: { borderRadius } }) => ({
                    borderRadius: borderRadius.xl,
                    padding: "25px",
                    backgroundColor: secondary.focus,
                    "&:hover": {
                      backgroundColor: rgba(secondary.focus, 0.9),
                    },
                  })}
                >
                  <Icon
                    as={FaGoogle}
                    w="30px"
                    h="30px"
                    sx={({ palette: { white } }) => ({
                      color: white.focus,
                    })}
                  />
                </IconButton>
              </a>
            </GradientBorder>
          </Stack>
          <VuiTypography
            color="text"
            fontWeight="bold"
            textAlign="center"
            mb="14px"
            sx={({ typography: { size } }) => ({ fontSize: size.lg })}
          >
            or
          </VuiTypography>
          <VuiBox mb={2}>
  {/* Name */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Name
    </VuiTypography>
    <VuiBox display="flex">
      <GradientBorder
        minWidth="48%"
        borderRadius={borders.borderRadius.lg}
        padding="1px"
        backgroundImage={radialGradient(
          palette.gradients.borderLight.main,
          palette.gradients.borderLight.state,
          palette.gradients.borderLight.angle
        )}
      >
        <VuiInput
          placeholder="First Name"
          sx={({ typography: { size } }) => ({
            fontSize: size.sm,
          })}
        />
      </GradientBorder>
      <VuiBox mx={1} />
      <GradientBorder
        minWidth="48%"
        borderRadius={borders.borderRadius.lg}
        padding="1px"
        backgroundImage={radialGradient(
          palette.gradients.borderLight.main,
          palette.gradients.borderLight.state,
          palette.gradients.borderLight.angle
        )}
      >
        <VuiInput
          placeholder="Last Name"
          sx={({ typography: { size } }) => ({
            fontSize: size.sm,
          })}
        />
      </GradientBorder>
    </VuiBox>
  </VuiBox>

  {/* Email */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Email
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        type="email"
        placeholder="Your email..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Age */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Age (optional)
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        type="number"
        placeholder="Your age..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Gender */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Gender (optional)
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        placeholder="Your gender..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Occupation */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Occupation (optional)
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        placeholder="Your occupation..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Phone Number */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Phone Number
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        type="tel"
        placeholder="Your phone number..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Password */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Password
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        type="password"
        placeholder="Your password..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Profile Picture */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Profile Picture (optional)
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        type="file"
        placeholder="Upload your profile picture..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Location */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Location (City, Country)
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        placeholder="City, Country"
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Interests */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Interests
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        placeholder="Your interests (e.g., environmental, education)..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Availability */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Availability
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        placeholder="Available on weekdays/weekends..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Skills */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Skills
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        placeholder="Your skills (e.g., first aid, teaching)..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Profile URLs */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Profile URLs
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        placeholder="LinkedIn, GitHub, etc..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Short Bio/Description */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Short Bio/Description
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        placeholder="Why do you want to volunteer? Your experience..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Past Volunteer Experience */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Past Volunteer Experience (optional)
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        placeholder="Details about past volunteer experiences..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Preferred Volunteer Locations */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Preferred Volunteer Locations
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        placeholder="Willing to travel or only local?"
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Languages Spoken */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Languages Spoken
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        placeholder="Languages you speak..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Time Zone */}
  <VuiBox mb={1}>
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Time Zone
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        placeholder="Your time zone..."
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>

  {/* Account Creation Date (hidden or auto-filled) */}
  <VuiBox mb={1} display="none">
    <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
      Account Creation Date
    </VuiTypography>
    <GradientBorder
      minWidth="100%"
      borderRadius={borders.borderRadius.lg}
      padding="1px"
      backgroundImage={radialGradient(
        palette.gradients.borderLight.main,
        palette.gradients.borderLight.state,
        palette.gradients.borderLight.angle
      )}
    >
      <VuiInput
        type="text"
        value={new Date().toISOString().split('T')[0]} // Example format
        readOnly
        sx={({ typography: { size } }) => ({
          fontSize: size.sm,
        })}
      />
    </GradientBorder>
  </VuiBox>
</VuiBox>

          <VuiBox display="flex" alignItems="center">
            <VuiSwitch color="info" checked={rememberMe} onChange={handleSetRememberMe} />
            <VuiTypography
              variant="caption"
              color="white"
              fontWeight="medium"
              onClick={handleSetRememberMe}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Remember me
            </VuiTypography>
          </VuiBox>
          <VuiBox mt={4} mb={1}>
            <VuiButton color="info" fullWidth>
              SIGN UP
            </VuiButton>
          </VuiBox>
          <VuiBox mt={3} textAlign="center">
            <VuiTypography variant="button" color="text" fontWeight="regular">
              Already have an account?{" "}
              <VuiTypography
                component={Link}
                to="/authentication/sign-in"
                variant="button"
                color="white"
                fontWeight="medium"
              >
                Sign in
              </VuiTypography>
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </GradientBorder>
    </CoverLayout>
  );
}

export default SignIn;
