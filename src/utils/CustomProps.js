/**
 * Created by MZY on 2018/6/6.
 */
/**
 * 设置组件的的自定义属性
 * @param WrapComponent 组件
 * @param customProps 默认属性
 */
const setCustomProps = (WrapComponent, customProps) => {
    const componentRender = WrapComponent.prototype.render;
    const componentDefaultProps =
        WrapComponent.prototype.constructor.defaultProps;
    WrapComponent.prototype.constructor.defaultProps = {
        ...componentDefaultProps,
        ...customProps
    };
    WrapComponent.prototype.render = function render() {
        let oldProps = this.props;
        this.props = {
            ...this.props,
            style: [customProps.style, oldProps.style]
        };
        return componentRender.apply(this);
    };
};

export default setCustomProps;
