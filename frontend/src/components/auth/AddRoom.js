import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postRoom } from "../../actions/rooms";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
// import * as api from "../../api/index";

import "./Auth.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: 1,
            width: "25ch",
        },
    },
}));

const roomType = [
    {
        value: "single",
        label: "SINGLE",
    },
    {
        value: "double",
        label: "DOUBLE",
    },
    {
        value: "triple",
        label: "TRIPLE",
    },
    {
        value: "quad",
        label: "QUAD",
    },
    {
        value: "queen",
        label: "QUEEN",
    },
    {
        value: "king",
        label: "KING",
    },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const amenitiesList = [
    {
        value: 'Breakfast',
        key: 'breakfast'
    },
    {
        value: 'King Bed',
        key: 'king bed'
    },
    {
        value: 'Mini Bar',
        key: 'mini bar'
    },
    {
        value: '24 Hour Room Service',
        key: '24 hour room service'
    },
    {
        value: 'Bath',
        key: 'bath'
    },
    {
        value: 'Shower',
        key: 'shower'
    },
    {
        value: 'Sitting Area',
        key: 'sitting area'
    },
    {
        value: 'Coffee/Tea',
        key: 'cofee/tea'
    },
    {
        value: 'TV',
        key: 'tv'
    },
    {
        value: 'WiFi',
        key: 'wifi'
    },
    {
        value: 'Shuttle',
        key: 'shuttle'
    },
    {
        value: 'Beach',
        key: 'beach'
    },
    {
        value: 'Spa',
        key: 'spa'
    },
    {
        value: 'Hot Tub',
        key: 'hot tub'
    }
];

const AddRoom = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");
    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const [formData, setFormData] = useState({
        url: '',
        title: '',
        description: '',
        view: '',
        size: '',
        adults: '',
        children: '',
        bedding: '',
        paragraph: '',
        price: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAmenities = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedAmenities(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);
        for (let val in formData) {
            if (formData[val] === "") {
                setMsg("Fill Out Every Field");
                return setError(true);
            }
        }

        if (isNaN(Number(formData.adults))) {
            setMsg("Adults must only contain numbers");
            return setError(true);
        }

        if (isNaN(Number(formData.children))) {
            setMsg("Children must only contain numbers");
            return setError(true);
        }

        if (isNaN(Number(formData.price))) {
            setMsg("Price must only contain numbers");
            return setError(true);
        }

        dispatch(postRoom({ formData, selectedAmenities }));

        history.push("/admin");
    };

    return (
        <div className="Auth">
            <header
                className="header-main"
                style={{
                    background:
                        ' no-repeat center/cover url("/img/admin/admin_main.jpg")',
                }}
            >
                <div className="header-content">
                    <h2 className="alt-font">Add New Room</h2>
                </div>
            </header>

            <section className="details">
                <h1 className="alt-font">Enter Room Information</h1>
                {error && <span className="error-msg">{msg}</span>}
                <form className={classes.root} autoComplete="off">
                    <TextField
                        onChange={handleChange}
                        required
                        className="outlined-basic"
                        name="url"
                        select
                        label="Room Type"
                        value={formData.url}
                        // helperText="Room Type"
                        variant="outlined"
                    >
                        {roomType.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        onChange={handleChange}
                        required
                        className="outlined-basic"
                        name="title"
                        label="Title"
                        variant="outlined"
                        value={formData.title}
                    />
                    <TextField
                        onChange={handleChange}
                        required
                        className="outlined-basic"
                        name="description"
                        label="Description"
                        variant="outlined"
                        value={formData.description}
                    />
                    <FormControl className="outlined-basic">
                        <InputLabel id="demo-multiple-checkbox-label">Amenities *</InputLabel>
                        <Select
                            // labelId="demo-multiple-checkbox-label"
                            // id="demo-multiple-checkbox"
                            name="amneties"
                            multiple
                            value={selectedAmenities}
                            onChange={handleAmenities}
                            input={<OutlinedInput label="Amenities *" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {amenitiesList.map((amenity) => (
                                <MenuItem key={amenity.key} value={amenity.value}>
                                    <Checkbox checked={selectedAmenities.indexOf(amenity.value) > -1} />
                                    <ListItemText primary={amenity.value} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        onChange={handleChange}
                        required
                        className="outlined-basic"
                        name="view"
                        label="View"
                        variant="outlined"
                        value={formData.view}
                    />
                    <TextField
                        onChange={handleChange}
                        required
                        className="outlined-basic"
                        name="size"
                        label="Size"
                        variant="outlined"
                        value={formData.size}
                    />
                    <TextField
                        onChange={handleChange}
                        required
                        className="outlined-basic"
                        name="adults"
                        label="Adults"
                        variant="outlined"
                        value={formData.adults}
                        inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                        }}
                    />
                    <TextField
                        onChange={handleChange}
                        required
                        className="outlined-basic"
                        name="children"
                        label="Children"
                        variant="outlined"
                        value={formData.children}
                        inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                        }}
                    />
                    <TextField
                        onChange={handleChange}
                        required
                        className="outlined-basic"
                        name="bedding"
                        label="Bedding"
                        variant="outlined"
                        value={formData.bedding}
                    />
                    <TextField
                        onChange={handleChange}
                        required
                        className="outlined-basic"
                        name="paragraph"
                        label="Overview"
                        variant="outlined"
                        value={formData.paragraph}
                    />
                    <TextField
                        onChange={handleChange}
                        required
                        className="outlined-basic"
                        name="price"
                        label="Price"
                        variant="outlined"
                        value={formData.price}
                        inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                        }}
                    />

                    <div className="btn-container">
                        <Button onClick={handleSubmit} variant="outlined">
                            Submit
                        </Button>
                    </div>
                </form>
            </section>





        </div >
    );
};

export default AddRoom;
