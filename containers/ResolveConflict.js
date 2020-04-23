import {connect} from 'react-redux'
import ResolveConflict from '../components/ResolveConflict'

import {variantOperations} from '../store/variant'
import next from 'next'

import { connect } from 'react-redux'

import ResolveConflict from '../components/ResolveConflict'
import { variantOperations } from '../store/variant'

const mapStateToProps = state=>({
    variants_with_conflict: state.variant.variants_with_conflict,
    variant_in_modal: state.variant.variant_in_modal,
    can_solve: state.variant.can_solve,
    modal_open: state.variant.modal_open,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(variantOperations.closeModal()),
    stepVariant: (selected, next_index) => dispatch(variantOperations.stepVariant(selected, next_index)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResolveConflict)