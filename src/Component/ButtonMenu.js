import React, { useState } from "react";
import styles from "./ButtonMenu.module.scss";
import classNames from "classnames/bind";


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from "@mui/material";
import { Key } from "@mui/icons-material";
const cx = classNames.bind(styles);
const ButtonMenu = ({ iconLeft, iconRight, children, title }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={cx("menu")}>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={cx("button")}
                style={{
                    fontSize: "15px",
                    color: "#333",
                    justifyContent: "space-between",
                    paddingRight: "10px",
                }}
                endIcon={
                    iconRight == null ? (
                        iconRight
                    ) : isOpen ? (
                        <KeyboardArrowUpIcon />

                    ) : (
                        <KeyboardArrowDownIcon />

                    )
                }
            >
                <span className={cx("left-title")}>
                    <span className={cx("btn-left")}>{iconLeft}</span>
                    {title}
                </span>
            </Button>
            {isOpen && children}
        </div>
    );
};

export default ButtonMenu;