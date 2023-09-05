const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(action) {
  if (!box.locked) {
    try {
      action(box.content);
    } catch (e) {
      throw e;
    }
  } else {
    box.unlock();
    try {
      action(box.content);
    } catch (e) {
      throw e;
    } finally {
      box.lock();
    }
  }
}

function listContent(content) {
  console.lg(content)
}

withBoxUnlocked(listContent);
