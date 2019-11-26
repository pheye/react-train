import { connect } from 'react-redux';
import Footer from '../components/Footer';

const mapStateToProps = (state) => ({
    current: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    onFilter: (filter) => dispatch({
        type: 'CHANGE_FILTER',
        filter
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);