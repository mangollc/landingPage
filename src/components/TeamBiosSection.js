import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  media: {
    height: 120,
  },
  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: -(theme.spacing(15) / 2),
  },
  avatarBorder: {
    borderRadius: "50%",
    padding: "7px",
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

function TeamBiosSection(props) {
  const classes = useStyles();

  const items = [
    {
      headerImage:
        "https://images.unsplash.com/photo-1492138623748-a1b1f758a762?auto=format&fit=crop&w=800&h=600&q=80",
      avatarImage: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
      name: "John Smith",
      role: "Software Engineer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
    },
    {
      headerImage:
        "https://images.unsplash.com/photo-1531915911824-79a6471b9827?auto=format&fit=crop&w=800&h=600&q=80",
      avatarImage: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
      name: "Lisa Zinn",
      role: "Software Engineer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
    },
    {
      headerImage:
        "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?auto=format&fit=crop&w=800&h=600&q=80",
      avatarImage: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
      name: "Diana Low",
      role: "Designer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} justifyContent="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={item.headerImage}
                  title={item.name}
                />
                <div className={classes.avatarWrapper}>
                  <div className={classes.avatarBorder}>
                    <Avatar
                      src={item.avatarImage}
                      alt={item.name}
                      className={classes.avatar}
                    />
                  </div>
                </div>
                <CardContent>
                  <Box textAlign="center">
                    <Typography variant="body2" component="p">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.role}
                    </Typography>
                    <Box mt={2}>
                      <Typography variant="body1" component="p">
                        {item.bio}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
