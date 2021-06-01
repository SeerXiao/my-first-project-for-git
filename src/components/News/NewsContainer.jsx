import { connect } from "react-redux";
import { getPosts } from "../../redux/newsReducer/news-selectors";
import News from "./News";






const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
    }
}

export default connect(mapStateToProps, {})(News);