
import reactRefresh from '@vitejs/plugin-react-refresh'

export default {
  plugins: [reactRefresh({
	excludeExports: ['mapStateToProps', 'mapDispatchToProps']
  })]
}
