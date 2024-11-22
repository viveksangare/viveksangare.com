// hero
const Hero = () => {
  function TypewriterEffect({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pause = 1000,
  }) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentText = texts[currentTextIndex];

      if (!isDeleting) {
        // Typing phase
        if (displayedText.length < currentText.length) {
          const typeTimeout = setTimeout(() => {
            setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
          }, typingSpeed);
          return () => clearTimeout(typeTimeout);
        } else {
          // Pause before deleting
          const pauseTimeout = setTimeout(() => {
            setIsDeleting(true);
          }, pause);
          return () => clearTimeout(pauseTimeout);
        }
      } else {
        // Deleting phase
        if (displayedText.length > 0) {
          const deleteTimeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
          return () => clearTimeout(deleteTimeout);
        } else {
          // Move to the next text after deleting
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, [
      texts,
      typingSpeed,
      deletingSpeed,
      pause,
      displayedText,
      isDeleting,
      currentTextIndex,
    ]);

    return <span>{displayedText}</span>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        // height: { xs: `calc(100vh - 56px)`, sm: `calc(100vh - 64px)` },
        height: "100vh",
        position: "absolute",
        top: 0,
        overflow: "hidden",
      }}
    >
      {/* <Box height="100vh" position="absolute" top="0" left="0" width="100%">
        <RandomPhysicsCanvas />
      </Box> */}
      {/* <Container
        sx={{
          minHeight: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              // maxHeight: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "50%",
                },
                color: "#2B7A78",
                padding: "1rem",
              }}
            >
              <Typography variant="h5" fontWeight="500">
                Hi There!
                <Typography variant="span" className="wave" marginLeft="10px">
                  👋
                </Typography>
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: "clamp(1rem, 5vw, 3rem)" }}
              >
                I&apos;m{" "}
                <Typography
                  variant="span"
                  fontWeight="600"
                  color={theme.palette.primary.contrastText}
                >
                  Vivek Sangare
                </Typography>
              </Typography>
              <Box
                sx={{
                  fontFamily: theme.typography.monospace.fontFamily,
                  fontSize: "24px",
                  color: "#4c956c",
                  marginTop: "1rem",
                }}
              >
                <TypewriterEffect
                  texts={[
                    "Front-end Developer",
                    "MERN Stack Developer",
                    "Software Developer",
                    "Freelancer",
                    "Full Stack Developer",
                  ]}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pause={1500}
                />
                <Typography variant="span" className="cursor"></Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "50%",
                },
                padding: "1rem",
                // overflow: "hidden",
                // position: "relative",
                // display: "flex",
                height: "100%",
              }}
            >
              <Box
                component="img"
                src={cuteProgrammer}
                alt="Sample Image"
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "8px",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container> */}
      <Box
        sx={{
          height: "1200px",
          backgroundColor: "blue",
          zIndex: 1,
          position: "relative",
          opacity:0.2
        }}
        className="blue"
      ></Box>
    </Box>
  );
};