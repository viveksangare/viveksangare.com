<Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: "8px",
            transform: "rotateY(180deg)", 
          }}
        >
          <Box
            sx={{
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: `-4px -4px 2px ${theme.palette.primary.main}`,
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems:"center",
              padding: "1rem",
              aspectRatio: "1/1",
              flexGrow: 1,
              maxWidth: "100%",
              maxHeight:"100%"
            }}
          >
            {/* content starts */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <Avatar
                alt="Vivek Sangare"
                src={avatarImage}
                sx={{
                  width: 56,
                  height: 56,
                  border: `3px solid ${theme.palette.primary.main}`,
                  borderRadius: "64px",
                }}
              />
              <Typography variant="h6" fontWeight="700" letterSpacing="1px">
                Vivek
              </Typography>
              <Typography
                component="p"
                fontWeight="500"
                sx={{
                  fontSize: "clamp(0.8rem, 5vw, 1rem)",
                  fontFamily: theme.otherTypographies.monospace.fontFamily,
                }}
              >
                Full-stack Developer
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <List
                sx={{
                  width: "100%",
                }}
              >
                <ListItem disablePadding>
                  <ListItemIcon
                    sx={{
                      minWidth: "0px",
                      marginRight: "8px",
                    }}
                  >
                    <LocationOnIcon fontSize="16px" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Pune, India"
                    primaryTypographyProps={{
                      letterSpacing: "1px",
                      fontSize: "0.9rem",
                    }}
                    sx={{ margin: 0 }}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon
                    sx={{
                      minWidth: "0px",
                      marginRight: "8px",
                    }}
                  >
                    <WorkIcon fontSize="16px" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Full-time / Freelancer"
                    primaryTypographyProps={{
                      letterSpacing: "1px",
                      fontSize: "0.9rem",
                    }}
                    sx={{ margin: 0 }}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon
                    sx={{
                      minWidth: "0px",
                      marginRight: "8px",
                    }}
                  >
                    <WorkHistoryIcon fontSize="16px" />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Experience: ${calculateExperience("2022-10-01")}`}
                    primaryTypographyProps={{
                      letterSpacing: "1px",
                      fontSize: "0.9rem",
                    }}
                    sx={{ margin: 0 }}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon
                    sx={{
                      minWidth: "0px",
                      marginRight: "8px",
                    }}
                  >
                    <EmailIcon fontSize="16px" />
                  </ListItemIcon>
                  <ListItemText
                    primary="viveksangare23@gmail.com"
                    primaryTypographyProps={{
                      letterSpacing: "1px",
                      fontSize: "0.9rem",
                      margin: 0,
                    }}
                    sx={{ margin: 0 }}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon
                    sx={{
                      minWidth: "0px",
                      marginRight: "8px",
                    }}
                  >
                    <LinkIcon fontSize="16px" />
                  </ListItemIcon>
                  <ListItemText
                    primary="www.viveksangare.com"
                    primaryTypographyProps={{
                      letterSpacing: "1px",
                      fontSize: "0.9rem",
                    }}
                    sx={{ margin: 0 }}
                  />
                </ListItem>
              </List>
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: "32px",
                  textTransform: "none",
                  letterSpacing: "1px",
                  textAlign: "center",
                  maxWidth: "250px",
                }}
              >
                Download CV{" "}
                <DownloadIcon fontSize="1rem" sx={{ marginLeft: "4px" }} />
              </Button>
            </Box>
          </Box>
</Box>
        
        {/* Flip Button */}
      <Box
      sx={{
        position: "absolute",
        top: "0px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <button
        onClick={handleFlip}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          background: "#4caf50",
          color: "#fff",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Flip
      </button>
    </Box>