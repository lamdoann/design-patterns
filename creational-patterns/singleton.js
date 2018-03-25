const singleton = Symbol();
const singletonEnforcer = Symbol();

class SoundManager {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot use constructor');
    }
  }

  static getInstance() {
    if (!this[singleton]) {
      this[singleton] = new SoundManager(singletonEnforcer);
    }
    return this[singleton];
  }

  loadResource(url) {
    return url;
  }

  play() {
    return 'played';
  }

  stop() {
    return 'stopped';
  }

  pause() {
    console.log('pause');
    return 'paused';

    
  }
}

SoundManager.getInstance().load('source');
