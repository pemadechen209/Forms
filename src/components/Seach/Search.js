import './Search.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Search = (props) => {

    return <div className='container my-3'>
        <Box className='mt-3 ' sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id='input-with-sx' className='form-control text-center'
                onChange={(e) => props.handleSearch(e)}
                label='Search By Name' variant="standard" name='name' />
        </Box>

    </div>
}

export default Search;