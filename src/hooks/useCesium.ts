import { ref, onUnmounted } from 'vue';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

export interface UseCesiumProps {
  containerId: string; // 容器元素的id
  forceCreate?: boolean; // 是否强制创建viewer
  options?: Cesium.Viewer.ConstructorOptions;
  baseLayer?: Cesium.ImageryLayer;
}

const defaultOptions: Cesium.Viewer.ConstructorOptions = {
  sceneMode: Cesium.SceneMode.SCENE3D,
  animation: false,
  baseLayerPicker: false,
  geocoder: false,
  timeline: false,
  navigationHelpButton: false,
};

export const useCesium = () => {
  const viewer = ref<Cesium.Viewer | null>(null);

  const initViewer = (props: UseCesiumProps) => {
    const { containerId = 'cesiumContainer', forceCreate, options, baseLayer } = props;

    // 设置 Access Token（如果环境变量中有配置则使用，否则使用默认值）
    const accessToken = import.meta.env.VITE_CESIUM_ACCESS_TOKEN;
    if (accessToken) {
      Cesium.Ion.defaultAccessToken = accessToken;
    } else {
      // 如果没有配置环境变量，使用默认的 token
      throw new Error('No Cesium Access Token found');
    }

    // 如果需要重新重建 销毁旧容器
    if (forceCreate && viewer.value) {
      viewer.value.destroy();
      viewer.value = null;
    }

    // 获取容器元素
    const containerElement = document.getElementById(containerId);
    if (!containerElement) {
      console.error(`Container element with id "${containerId}" not found`);
      throw new Error(`Container element with id ${containerId} not found`);
    }

    const finalOptions = { ...defaultOptions, ...options };
    viewer.value = new Cesium.Viewer(containerElement, finalOptions);
    // 设置基础图层
    if (baseLayer) {
      viewer.value.imageryLayers.removeAll();
      viewer.value.imageryLayers.addImageryProvider(baseLayer.imageryProvider);
    }

    console.log('cesium viewer has been initialized');
  };

  const destory = () => {
    if (viewer.value) {
      viewer.value.destroy();
      viewer.value = null;
    }
  };
  onUnmounted(() => {
    destory();
  });

  return {
    initViewer,
    destory,
    viewer,
  };
};
