import React, { useEffect } from "react";
import { BottomNavigation } from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import "./MainNav.css";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history= useNavigate()
    useEffect(() => {
        if (value === 0) {
            history("/");
        } else if (value === 1) {
            history("/movies");
        } else if (value === 2) {
            history("/series");
        } else if (value === 3) {
            history("/search");
        }
    }, [value, history]);
    return (
        <BottomNavigation
            sx={{
                "& .BottomNavigation-root, .Mui-selected, svg": {
                    color: "#ffffff"
                },
                "& .Mui-selected, .Mui-selected > svg": {
                    color: "#f80f0f"
                }
            }}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                style={{ color: "white" }}
                label="Trending"
                icon={<WhatshotIcon />}
            />
            <BottomNavigationAction
                style={{ color: "white" }}
                label="Movies"
                icon={<MovieIcon />}
            />
            <BottomNavigationAction
                style={{ color: "white" }}
                label="TV Series"
                icon={<TvIcon />}
            />
            <BottomNavigationAction
                style={{ color: "white" }}
                label="Search"
                icon={<SearchIcon />}
            />
        </BottomNavigation>
    );
}