;(function() {

    var ExerciseHelper = function() {
        var self = this;

        this._init = function() {
            this._$currentNode = undefined;
            this._$nextNode = undefined;
            this._$unlock = $("#unlock");
            this._$timer = $("#timer");

            this._timerRef = this._getCurrentTimestamp();
            this._protected = true;
            this._protectionKey = "bb271b9eb7b4ecd1f7ae7a71cca8f8e3";

            this._bindListeners();
            this._hideSolutions();
            this._updateTimer();
            this._updateHelpboxView();
        };

        this._bindListeners = function() {
            $(document).bind('impress:stepenter', function(e) {
                self._onStepEnter(e);
            });

            this._$unlock.bind('click', function() {
                self._onUnlockClicked();
            });
        };

        this._hideSolutions = function() {
            $(".solution").each(function() {
                var solution = $(this);
                solution.addClass('locked');
            });
        };

        this._updateHelpboxView = function() {
            var shouldShowTimer = this._shouldShowTimer();
            if (shouldShowTimer) {
                this._$timer.removeClass("invisible");
            } else {
                this._$timer.addClass("invisible");
            }

            var shouldShowUnlockButton = this._shouldShowUnlockButton();

            if (shouldShowUnlockButton) {
                this._$unlock.removeClass("invisible");
            } else {
                this._$unlock.addClass("invisible");
            }
        };

        this._shouldShowTimer = function() {
            if (typeof(this._$currentNode) === "undefined") {
                return false;
            }
            if (this._$currentNode.hasClass("exercise")) {
                return true;
            }
            return false;
        };

        this._shouldShowUnlockButton = function() {
            var $relevantSolution = this._getRelevantSolution();
            if (typeof($relevantSolution) === "undefined") {
                return false;
            }
            if ($relevantSolution.hasClass("locked")) {
                return true;
            }
            return false;
        };

        this._onStepEnter = function(e) {
            this._$currentNode = $(".present");
            this._$nextNode = this._$currentNode.next();
            this._updateHelpboxView();
            this._resetTimer();
            this._updateTimer(false);
        };

        this._onUnlockClicked = function() {
            if (this._isProtected()) {
                return;
            }

            var $relevantSolution = this._getRelevantSolution();
            if (typeof($relevantSolution) === "undefined") {
                return;
            }
            $relevantSolution.removeClass('locked');
            this._updateHelpboxView();
        };

        this._isProtected = function() {
            if (this._protectionKey === undefined) {
                return false;
            }

            if (!this._protected) {
                return false;
            }
            var proposedToken = prompt("Enter the passphrase:"),
                proposedKey = CryptoJS.MD5(proposedToken) + "";

            // if key match it's ok
            if (proposedKey === this._protectionKey) {
                this._protected = false;
            }

            return this._protected;
        }

        this._getRelevantSolution = function() {
            var candidatesOrContainers = [this._$currentNode, this._$nextNode];
            for (var index in candidatesOrContainers) {
                var candidateOrContainer = candidatesOrContainers[index];
                if (typeof(candidateOrContainer) === "undefined") {
                    continue;
                }
                if (candidateOrContainer.hasClass('solution')) {
                    return candidateOrContainer;
                }
                var childCandidates = candidateOrContainer.find('.solution');
                if (childCandidates.size() > 0) {
                    return childCandidates;
                }
            }
        };

        this._resetTimer = function() {
            this._timerRef = this._getCurrentTimestamp();
        };

        this._updateTimer = function(loop) {
            if (typeof(loop) === "undefined") {
                loop = true;
            }
            var value = this._getFormatedTimerValue();

            this._$timer.text(value);

            if (!loop) {
                return;
            }

            setTimeout(function() {
                self._updateTimer();
            }, 77);
        };

        this._getFormatedTimerValue = function() {
            var timestamp = this._getCurrentTimestamp(),
                delta = timestamp - this._timerRef,
                minutes = Math.floor(delta / 60),
                seconds = delta % 60,
                timeComponents = [minutes, seconds]

            for (var i in timeComponents) {
                var component = timeComponents[i] + "";

                if (component.length < 2) {
                    component = "0"+component;
                }
                timeComponents[i] = component;
            }
            return timeComponents.join(':');
        };

        this._getCurrentTimestamp = function() {
            var timestampInMs = (new Date()).getTime();
            var timestamp = Math.floor(timestampInMs / 1000);
            return timestamp;
        };

        this._init();
    };

    $(document).ready(function() {
        new ExerciseHelper();
    });

})();
